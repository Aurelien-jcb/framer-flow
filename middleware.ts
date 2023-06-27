export { default } from 'next-auth/middleware'

export const config = {
  // matcher: []
    matcher: ['/','/dashboard', '/stocks/:path', '/fournisseurs/:path', '/devis/:path', '/commandes/:path', '/produits/:path','/parametres/:path' , ]
}