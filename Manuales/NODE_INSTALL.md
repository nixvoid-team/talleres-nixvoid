<h1 align="center">
  Nixvoid Team
  <br>
  <br>
  <img src="https://i.imgur.com/ovU5FwJ.png" alt="nixvoid logo" title="nixvoid logo" width="120">
  <br>
</h1>
<p align="center" style="font-size: 1.2rem;">Manual elaborado por el grupo nixvoid © Nixvoid No rights reserved 2021</p>

## Instalación de Node.js y NPM (Node Package Manager)

El objetivo de este manual es tener instalado en el sistema operativo **Node.js** y su gestor de packetes **NPM**.

## Para Windows

### Instalador
1. Ir a la página [Node.js Download](https://nodejs.org/en/download/)
2. Click en el paquete de Windows Installer (.msi) [De 32 o 64 bits dependiendo de su computadora]
3. Ir a la carpeta de descarga y ejecutar el instalador

### NVM
NVM es una alternativa a la instalación de Node.js con instalador que permite gestionar las diferentes de Node.js en tu computadora. La siglas corresponden a Node Version Manager
Para instalar con NVM necesitas seguir los siguientes pasos:
1. Dirígete a la página de releases: https://github.com/coreybutler/nvm-windows/releases
2. Descarga el archivo nvm-setup.zip
3. Descomprime el archivo nvm-setup.zip y ejecuta el archivo nvm-setup.exe
4. Sigue los pasos de instalación y finaliza
5. Abre una consola cmd en tu equipo y ejecuta el siguiente comando: nvm install 14 (versión LTS más reciente)

### Comprueba la instalación
Para comprobar la instalación de Node.js abre una consola cmd en tu equipo y ejecuta: 
```powershell
node -v
```

## Para Linux
Si quieres revisar por ti mismo anda a la [Guía de instalación general](https://nodejs.org/en/download/package-manager/)

### Debian y Ubuntu
1. Ir a la página [Instrucciones de Instalación](https://github.com/nodesource/distributions/blob/master/README.md#installation-instructions), ahí encontrarás diferentes versiones.
2. Para instalar **Node.js v16.x**:
```sh
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs

# Usando Debian, como root
curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
apt-get install -y nodejs
```

### CentOS, Fedora y Red Hat
1. Instrucciones: https://nodejs.org/en/download/package-manager/#centos-fedora-and-red-hat-enterprise-linux

### Otras distros

Ya deberías saberlo :)

### Comprueba la instalación
Para comprobar la instalación de Node.js abre una terminal en tu equipo y ejecuta: 
```bash
node -v
```

**Recursos adicionales:**

* [Basica prueba de nodejs](https://nodejs.org/en/docs/guides/getting-started-guide/)
* [Guia de node.js](https://nodejs.dev/learn)

**Hecho por:**
- Diego Lopez
- Misael Abanto
