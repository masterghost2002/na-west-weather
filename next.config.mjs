/** @type {import('next').NextConfig} */
import nextPWA from 'next-pwa';
const nextConfig = {
    images: {
        domains: ['cdn.weatherapi.com'],
    },
};
const withPWA = nextPWA({
 dest: 'public', 
 register: true,
 skipWaiting: true,
})
export default withPWA({
    ...nextConfig
});
