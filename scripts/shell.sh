#!/bin/bash

# Instalar mailutils se não estiver instalado
sudo apt-get update
sudo apt-get install -y mailutils

# Usar a variável de ambiente para enviar e-mail
echo "Mandando e-mail com o mailutils do linux" | mail -s "um email" "$NOTIFICATION_EMAIL"
