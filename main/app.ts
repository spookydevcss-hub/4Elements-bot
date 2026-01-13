import { REST, Routes } from 'discord.js';

export async function registerCommands(token: string, clientId: string, commands: any[]) {
    const commandsArray = commands;
    
    commandsArray.push({
        name: 'sorteo',
        description: 'Crea un sorteo increíble',
        options: [
            {
                name: 'premio',
                type: 3,
                description: 'El premio del sorteo',
                required: true
            },
            {
                name: 'duracion',
                type: 4,
                description: 'Duración en segundos (default: 60)',
                required: false
            }
        ]
    });

    const rest = new REST({ version: '10' }).setToken(token);

    try {
        console.log('Registrando comandos...');
        await rest.put(Routes.applicationCommands(clientId), { body: commandsArray });
        console.log('✅ Comandos registrados exitosamente\n');
    } catch (error) {
        console.error('Error al registrar comandos:', error);
    }
}