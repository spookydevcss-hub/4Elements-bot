import dotenv from 'dotenv';
import { Client, GatewayIntentBits, EmbedBuilder } from 'discord.js';
import { registerCommands } from './app';
import { handleWelcome } from './events/welcome';
import { handleSorteoCommand } from './commands/sorteo';

dotenv.config();

const token = process.env.DISCORD_TOKEN || '';
const clientId = process.env.CLIENT_ID || '';

if (!token || !clientId) {
    console.error('❌ Faltan variables de entorno: DISCORD_TOKEN y CLIENT_ID');
    process.exit(1);
}

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once('ready', async () => {
    const embed = new EmbedBuilder()
        .setColor('#FF6B6B')
        .setTitle('✨ Bot de Sorteos Activado')
        .setDescription(`Conectado como **${client.user?.tag}**`)
        .addFields(
            { name: '📊 Estado', value: 'En línea y listo', inline: true },
            { name: '🎮 Servidores', value: `${client.guilds.cache.size}`, inline: true }
        )
        .setFooter({ text: '4 Elements Bot' })
        .setTimestamp();

    console.log(`\n✅ ${client.user?.tag} está en línea!\n`);
    await registerCommands(token, clientId, []);
});

client.on('guildMemberAdd', (member) => handleWelcome(member));

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    try {
        if (interaction.commandName === 'sorteo') {
            await handleSorteoCommand(interaction);
        }
    } catch (error) {
        console.error('Error en comando:', error);
        await interaction.reply({ content: '❌ Error al procesar el comando', ephemeral: true });
    }
});

client.login(token);
