import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333'
});

export default api;

/**
 * iOS com emulador: localhost
 * iOS com físico: ip da máquina
 * Android com emulador: adb reverse tcp:3333 tcp:3333 (dai fica localhost:3333)
 * Android com Android Studio: 10.0.2.2
 * Android com Jenny Motion: 10.0.3.2
 * Android com físico: ip da máquina
 */