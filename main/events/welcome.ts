import { GuildMember, EmbedBuilder } from 'discord.js';

export async function handleWelcome(member: GuildMember) {
    try {
        const embed = new EmbedBuilder()
            .setColor('#4ECDC4')
            .setTitle('🎉 ¡Bienvenido!')
            .setDescription(`Hola **${member.user.username}**, bienvenido a **${member.guild.name}**`)
            .addFields(
                { name: '📢 Comandos Disponibles', value: '`/sorteo [premio]` - Crear un sorteo', inline: false },
                { name: '🎁 Cómo usar', value: 'Escribe `/sorteo` seguido del premio y reacciona con 🎉', inline: false },
                { name: '⏱️ Duración', value: 'Por defecto 60 segundos (personalizable)', inline: false }
            )
            .setThumbnail(member.user.displayAvatarURL())
            .setColor('#FF6B6B')
            .setFooter({ text: '4 Elements Bot' })
            .setTimestamp();

        await member.send({ embeds: [embed] });
        console.log(`✅ Bienvenida enviada a ${member.user.tag}`);
    } catch (error) {
        console.error(`❌ Error con ${member.user.tag}:`, error);
    }
}
