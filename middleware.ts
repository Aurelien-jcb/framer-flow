export { default } from 'next-auth/middleware'

export const config = {
    matcher: ['/','/dashboard', '/stocks', '/fournisseurs', '/devis', '/commandes', '/produits','/parametres' , ]
}