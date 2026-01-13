import { ChatInputCommandInteraction, EmbedBuilder, ChannelType } from 'discord.js';

export async function handleFinalizarCommand(interaction: ChatInputCommandInteraction) {
    const messageId = interaction.options.getString('message_id');

    try {
        const message = await interaction.channel?.messages.fetch(messageId);
        if (!message) {
            return await interaction.reply({ content: '❌ Mensaje no encontrado', ephemeral: true });
        }

        const reactions = message.reactions.cache.get('🎉');
        const usuarios = await reactions?.users.fetch();
        const participantes = usuarios?.filter(u => !u.bot) || new Map();

        if (participantes.size === 0) {
            return await interaction.reply({ content: '❌ No hay participantes en este sorteo', ephemeral: true });
        }

        const ganador = Array.from(participantes.values())[Math.floor(Math.random() * participantes.size)];

        const embed = new EmbedBuilder()
            .setColor('#FFD93D')
            .setTitle('🏆 ¡GANADOR ELEGIDO!')
            .setDescription(`🎉 **${ganador.username}** es el ganador`)
            .addFields(
                { name: '👥 Participantes totales', value: `${participantes.size}`, inline: true },
                { name: '📊 Probabilidad', value: `${(100 / participantes.size).toFixed(2)}%`, inline: true }
            )
            .setThumbnail(ganador.displayAvatarURL())
            .setFooter({ text: '4 Elements Bot' })
            .setTimestamp();

        await interaction.reply({ embeds: [embed] });
        console.log(`🏆 Ganador: ${ganador.username}`);
    } catch (error) {
        console.error('Error al finalizar:', error);
        await interaction.reply({ content: '❌ Error al procesar sorteo', ephemeral: true });
    }
}
