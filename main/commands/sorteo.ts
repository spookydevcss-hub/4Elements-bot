import { ChatInputCommandInteraction, EmbedBuilder } from 'discord.js';

export async function handleSorteoCommand(interaction: ChatInputCommandInteraction) {
    const premio = interaction.options.getString('premio');
    const duracion = (interaction.options.getInteger('duracion') || 60) * 1000;

    const embed = new EmbedBuilder()
        .setColor('#FF6B6B')
        .setTitle('🎁 ¡NUEVO SORTEO!')
        .setDescription(`**${premio}**`)
        .addFields(
            { name: '👤 Creador', value: `${interaction.user.username}`, inline: true },
            { name: '⏱️ Duración', value: `${duracion / 1000}s`, inline: true },
            { name: '🎉 Reacciona para participar', value: '┗━━━━━━━━━━━━━━━┛', inline: false }
        )
        .setThumbnail('https://cdn-icons-png.flaticon.com/512/2745/2745957.png')
        .setFooter({ text: '4 Elements Bot' })
        .setTimestamp();

    const message = await interaction.reply({ embeds: [embed], fetchReply: true });
    await message.react('🎉');

    setTimeout(async () => {
        try {
            const reactions = message.reactions.cache.get('🎉');
            const usuarios = await reactions?.users.fetch();
            const participantes = usuarios?.filter(u => !u.bot) || new Map();

            if (participantes.size === 0) {
                const sinGanadorEmbed = new EmbedBuilder()
                    .setColor('#FF6B6B')
                    .setTitle('❌ Sorteo Cancelado')
                    .setDescription('No hubo participantes en este sorteo')
                    .setFooter({ text: '4 Elements Bot' })
                    .setTimestamp();

                await message.edit({ embeds: [sinGanadorEmbed] });
                return;
            }

            const ganador = Array.from(participantes.values())[Math.floor(Math.random() * participantes.size)];

            const winnerEmbed = new EmbedBuilder()
                .setColor('#FFD93D')
                .setTitle('🏆 ¡GANADOR ELEGIDO!')
                .setDescription(`🎉 **${ganador.username}** es el ganador`)
                .addFields(
                    { name: '🎁 Premio', value: `${premio}`, inline: true },
                    { name: '👥 Participantes', value: `${participantes.size}`, inline: true },
                    { name: '📊 Probabilidad', value: `${(100 / participantes.size).toFixed(2)}%`, inline: true }
                )
                .setThumbnail(ganador.displayAvatarURL())
                .setFooter({ text: '4 Elements Bot' })
                .setTimestamp();

            await message.edit({ embeds: [winnerEmbed] });
            console.log(`🏆 Ganador: ${ganador.username} - Premio: ${premio}`);
        } catch (error) {
            console.error('Error al finalizar sorteo:', error);
        }
    }, duracion);

    console.log(`🎁 Sorteo iniciado: ${premio} (${duracion / 1000}s)`);
}
