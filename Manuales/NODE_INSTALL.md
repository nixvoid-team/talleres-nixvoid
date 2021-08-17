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
1. Ir a la página [Node.js Download](https://nodejs.org/en/download/)
2. Click en el paquete de Windows Installer (.msi) [De 32 o 64 bits dependiendo de su computadora]
3. Ir a la carpeta de descarga y ejecutar el instalador
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

**Recursos adicionales:**

* [Basica prueba de nodejs](https://nodejs.org/en/docs/guides/getting-started-guide/)
* [Guia de node.js](https://nodejs.dev/learn)