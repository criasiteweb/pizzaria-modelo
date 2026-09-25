/* =========================================================
   Pizzaria Modelo — ligação com o servidor de pedidos
   Criasiteweb

   Estas chaves são públicas por natureza: elas apenas dizem
   ao navegador QUAL projeto procurar. Quem protege os dados
   são as regras do servidor, que só deixam a conta da loja
   ler os pedidos. Qualquer um pode ENVIAR um pedido (é o que
   o cliente faz no site), mas ninguém consegue LER a lista.
   ========================================================= */

export const FIREBASE_CONFIG = {
  apiKey: "TROCAR",
  authDomain: "TROCAR",
  projectId: "TROCAR",
  storageBucket: "TROCAR",
  messagingSenderId: "TROCAR",
  appId: "TROCAR"
};

/* conta usada pelo balcão para entrar no painel */
export const CONTA_LOJA = "criasite.site@gmail.com";
