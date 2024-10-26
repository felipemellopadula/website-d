import fpgImage1 from '../../assets/fpg/fpg-01.jpg';  
import fpgImage2 from '../../assets/fpg/fpg-04.jpg';
import videoBg from "../../assets/Sierra/Sierra02.mp4";
import amazonia1 from "../../assets/Amazônia/06.jpg";
import amazonia2 from "../../assets/Amazônia/10.jpg";
import amazonia3 from "../../assets/Amazônia/Paris01.jpg";
import amazonia5 from "../../assets/Amazônia/11.jpg";
import amazonia6 from "../../assets/Amazônia/comp1.jpg";
import amazonia7 from "../../assets/Amazônia/12.png";
import amazonia8 from "../../assets/Amazônia/13.png";
import markela1 from "../../assets/Markela/aqua1.png";
import markela2 from "../../assets/Markela/aqua2.png";
import markela4 from "../../assets/Markela/ego1.png";
import markela5 from "../../assets/Markela/ego2.png";
import markela6 from "../../assets/Markela/perfume1.png";
import markela7 from "../../assets/Markela/sense1.png";
import markela8 from "../../assets/Markela/sense2.png";
import yamamura1 from "../../assets/yamamura.png";
import yamamura2 from "../../assets/Yamamura/Yamamura-revista.jpg";
import yamamuravideo1 from "../../assets/Yamamura/Yamamura.mp4";
import videoama from "../../assets/amawater.mp4";
import videoTalk1 from "../../assets/Talk/Chamada-08-10.mp4";
import talkimg1 from "../../assets/Talk/anuncio-04.png";
import talkimg2 from "../../assets/Talk/anuncio-talk-golf-show-institucional-newgolf.jpg";
import videoTalk2 from "../../assets/Talk/Vinhta-Interna-Tgs.mp4";
import videoReal from "../../assets/real-green/real.mp4";
import imgPrado1 from "../../assets/Prado/Anuncio-revista-prado-3.jpg";
import imgPrado2 from "../../assets/Prado/layout-d.jpg";
import imgPrado3 from "../../assets/Prado/website-prado.jpg";
import imgArtek1 from "../../assets/Artek/ARTEK-folder-f.jpg";
import imgArtek2 from "../../assets/Artek/ARTEK-folder-B.jpg";
import imgArtek3 from "../../assets/Artek/ARTEK-folder-d.jpg";
import imgRenault1 from "../../assets/Renault/renault1.jpg";
import imgRenault2 from "../../assets/Renault/renault2.jpg";
import imgCenter from "../../assets/Center/center-fabril.jpg";
import imgCenter2 from "../../assets/Center/anuncio-jornalB.jpg"




export interface IPortfolioItem {
  id: string;
  client: string;
  title: string;
  category: string;
  description: string;
  imageUrl?: string;
  imageUrl2?: string;
  imageUrl3?: string[];
  video1?: string;
  video2?: string;
  content: string;
}

export const portfolioItemsData: IPortfolioItem[] = [
  {
    id: "item1",
    client: "Federação Paulista de Golfe",
    title: "AULAS DE GOLFE COM FPG GOLFCENTER",
    category: "Offline e Digitais",
    description: "Descrição detalhada do item 1",
    imageUrl: fpgImage1,
    imageUrl2: fpgImage2,
    content: `  
      Sabe aquela tacada que parecia perfeita, mas acabou indo parar… bem, longe do ideal? A Federação Paulista de Golfe também sabe! 😉
      E para incentivar os frequentadores de seu Golf Center a finalmente conquistar o swing dos sonhos, criamos uma campanha super divertida e que vai direto ao ponto! Reconhecendo que todo golfista, experiente ou não, já vivenciou momentos inusitados, como tacos arremessados e vidros quebrados, optamos por uma abordagem bem-humorada para promover as aulas. 
    `,
  },
  {
    id: "item2",
    client: "Sierra Mike",
    title: "Fretes Aéreos com Sierra Mike",
    category: "Digitais",
    description: "Descrição detalhada do item 2",
    video1: videoBg,
    content: `  
        Já imaginou viajar com o conforto e a segurança que você sempre sonhou? A Sierra Mike Fretes Aéreos tornou isso realidade, e nós ajudamos a mostrar ao mundo! ✨ O desafio? Comunicar os benefícios exclusivos da Sierra Mike, destacando-se em um mercado competitivo. Nossa solução? Um vídeo de tirar o fôlego! 🎬 Mostramos tudo: a imponência das aeronaves por fora, o conforto e sofisticação por dentro, e a emoção do voo em si! Deu pra sentir a adrenalina? 😉
      `,
  },
  {
    id: "item3",
    client: "Amazônia Água de Coco",
    title: "Do Brasil para o mundo com Amazônia Água de Coco",
    category: "3D - Out of Home",
    description: "Descrição detalhada do item 3",
    imageUrl: amazonia1,
    imageUrl2: amazonia2,
    imageUrl3: [amazonia3, amazonia5, amazonia6, amazonia7, amazonia8],
    content: `  
        A Amazônia Água de Coco deu um refresh incrível em suas embalagens, e nós, aqui na Unity, tivemos a honra de dar vida a essa transformação em um projeto super especial! ✨ O desafio? Apresentar as novas embalagens de forma impactante em quatro países: Brasil, Estados Unidos, França e Emirados Árabes Unidos, tanto no Digital quanto em Out-of-Home. E como fizemos isso? Com a magia do 3D! 🚀 Criamos modelos 3D hiper-realistas das novas embalagens, destacando cada detalhe com um toque de modernidade. Para o Brasil, a missão era ainda mais vibrante: representar a exuberância da nossa terra! Incorporamos ilustrações cheias de cor, natureza, floresta e toda a energia brasileira, transmitindo a essência da Amazônia em cada pixel. 🇧🇷💚
      `,
  },
  {
    id: "item4",
    client: "Markela Cosméticos",
    title: "Linha de produtos com Markela Cosméticos",
    category: "Offline e Digitais",
    description: "Descrição detalhada do item 4",
    imageUrl: markela1,
    imageUrl2: markela2,
    imageUrl3: [markela4, markela5, markela6, markela7, markela8],
    content: `  
       A Markela Cosméticos queria um visual super moderno e bonito para os seus produtos, e adivinha quem foi chamado para ajudar? A gente! 😉 O desafio: dar vida aos produtos, criar embalagens de perfumes sedutores a desodorantes refrescantes, com ilustrações 3D de cair o queixo. E para dar aquele toque especial, splashes de água dignos de comercial de TV! 💦 A solução? Mergulhamos de cabeça em ilustrações 3D hiper-realistas, capturando cada detalhe dos produtos Markela. Os splashes de água? Super refrescantes e vibrantes, dando toda a sensação de limpeza e bem-estar. O resultado foram lindas ilustrações, impactantes, que salta aos olhos e te convida a experimentar cada produto! 😍  
      `,
  },
  {
    id: "item5",
    client: "Lustres Yamamura",
    title: "TUDO PARA O SEU PROJETO COM LUSTRES YAMAMURA",
    category: "Tv, Offline e Digitais",
    description: "Descrição detalhada do item 5",
    imageUrl: yamamura1,
    imageUrl2: yamamura2,
video1: yamamuravideo1,
    content: `  
        A Lustres Yamamura tinha um desafio brilhante: mostrar que é O lugar para encontrar tudo em iluminação. E nós, da Unity, topamos iluminar esse caminho! Afinal, quem melhor do que nós para acender a chama do sucesso? 😉 Com o conceito "Tudo para o Seu Projeto", transformamos a Yamamura num verdadeiro marketplace da luz! 💡 Criamos uma campanha completa, que brilhou forte na TV, com um comercial impactante, e invadiu as ruas com anúncios offline e out-of-home de tirar o fôlego. E claro, as redes sociais e o digital não ficaram de fora! 🚀 Com estratégias personalizadas e conteúdo de arrasar, mostramos para todo mundo que, quando o assunto é iluminação, a Yamamura tem tudo!
      `,
  },
  {
    id: "item6",
    client: "Ama Water Ways",
    title: "CRUZEIROS PELO RIO DANÚBIO COM AMA WATER WAYS",
    category: "Digitais",
    description: "Descrição detalhada do item 6",
    video1: videoama,
    content: `  
        A AmaWaterways nos procurou com um desafio delicioso: mostrar toda a magia de um cruzeiro pelo Danúbio, indo além das fotos de catálogo. O problema certamente estava em capturar a experiência completa, a emoção de navegar por paisagens deslumbrantes e a riqueza dos passeios inclusos, tudo em um formato atraente e fácil de digerir. Nossa solução? Um roteiro de vídeo cinematográfico! Imaginem: imagens de tirar o fôlego do rio Danúbio, intercaladas com cenas vibrantes dos passeios, desde castelos medievais a vinícolas charmosas. Mostramos o conforto e a elegância do navio AmaWaterways, destacando as comodidades e o requinte a bordo. O resultado foi um vídeo irresistível que transporta o espectador para o coração da Europa, despertando o desejo imediato de embarcar nessa aventura!
      `,
  },
  {
    id: "item7",
    client: "Talk Golf Show",
    title: "VINHETAS PARA PODCAST COM TALK GOLF SHOW",
    category: "Digitais",
    description: "Descrição detalhada do item 7",
    video1: videoTalk1,
    video2: videoTalk2,
    imageUrl: talkimg1,
    imageUrl2: talkimg2,
    content: `  
        Aqui na Unity, a gente respira criatividade e adora um desafio! E o projeto com o Talk Golf Show foi pura adrenalina! ⛳️ Eles já tinham um podcast incrível, transmitido ao vivo todas as terças nas principais redes sociais, mas queriam algo a mais... algo que capturasse a energia do golfe e a dinâmica do programa e encomendaram com a gente um novo pacote de Vinhetas, cortes, chamadas e anúncios! ✨ O desafio era dar um "boost" visual e sonoro ao programa, tornando-o ainda mais profissional e atrativo para o público. Nossa proposta foi criar vinhetas modernas, dinâmicas e com a cara do Talk Golf Show! Pensamos em tudo: animações vibrantes, trilha sonora empolgante, e uma identidade visual que grita "BIRDIE!". 🏌️‍♂️ 
      `,
  },
  {
    id: "item8",
    client: "Prado Chaves",
    title: "QUANDO E ONDE PRECISAR COM PRADO CHAVES",
    category: "Online e Offline",
    description: "Descrição detalhada do item 8",
    imageUrl: imgPrado1,
    imageUrl2: imgPrado2,
    imageUrl3: [imgPrado3],
    content: `  
       A Prado Chaves, especialista em guarda e acesso de documentos (físicos e digitais), precisava de uma comunicação que mostrasse sua disponibilidade e acessibilidade. E foi aí que entramos em cena! Desenhamos uma linha de comunicação incrível, com o título certeiro: "Quando e Onde Precisar". ✨ O problema? Mostrar ao público o quão fácil e prático é contar com a Prado Chaves. Nossa solução foi criar um universo de situações cotidianas onde a empresa se faz presente, simplificando a vida de seus clientes. Imagine a tranquilidade de ter seus documentos seguros e acessíveis a qualquer momento! Seja um imprevisto no meio do trânsito, em uma viagem ou em uma situação mais embaraçosa o cliente Prado Chaves terá sempre tranquilidade. 🧘‍♀️ Foram criados anúncios, websites, e uma campanha digital com SEO.
      `,
  },
  {
    id: "item9",
    client: "Artek",
    title: "NOVOS CATÁLOGOS ARTEK",
    category: "Digitais",
    description: "Descrição detalhada do item 9",
    imageUrl: imgArtek1,
    imageUrl2: imgArtek2,
    imageUrl3: [imgArtek3],
    content: `  
       A Artek, sinônimo de iluminação de qualidade, precisava de um up no seu catálogo de produtos. Era hora de dar um choque de criatividade e mostrar todo o potencial da marca. E foi aí que entramos em cena! 💪 A missão? Revitalizar completamente o catálogo da Artek, com um visual moderno, clean e que transmitisse a excelência dos seus produtos. Desenvolvemos um projeto focado em fotografia de alta qualidade, com um design moderno e informativo, destacando a beleza e a funcionalidade de cada lâmpada e item de iluminação. O resultado? Um catálogo deslumbrante, fácil de navegar e que inspira os clientes a iluminar seus ambientes com a Artek! 🤩
      `,
  },
  {
    id: "item10",
    client: "Renault do Brasil",
    title: "VERÃO DE NORTE A SUL COM RENAULT",
    category: "PDV - Offline",
    description: "Descrição detalhada do item 10",
    imageUrl: imgRenault1,
    imageUrl2: imgRenault2,
    content: `  
        A Renault do Brasil, uma gigante do mundo automotivo, nos desafiou com uma missão incrível: espalhar boas novas e vibrações pelo Brasil, incentivando test drives durante o verão! E é claro que a gente topou! 😎 O problema? Precisavam de displays chamativos para as concessionárias, que realmente convidassem o público a sentir a experiência Renault na pele (ou melhor, no volante!). Além disso, precisávamos de uma identidade visual forte para a campanha "Verão de Norte a Sul". Criamos displays vibrantes e modernos, com design impactante que destaca os modelos da Renault e a energia contagiante do verão brasileiro. E para coroar a campanha, desenvolvemos um logotipo exclusivo que transmite toda a alegria e a liberdade que só um carro novo pode proporcionar! 🚗💨
      `,
  },
  {
    id: "item11",
    client: "Center Fabril",
    title: "OS FIOS QUE TECEM SUA VIDA COM CENTER FABRIL",
    category: "Offline e Digitais",
    description: "Descrição detalhada do item 11",
    imageUrl: imgCenter,
    imageUrl2: imgCenter2,
    content: `  
        A Center Fabril, nome tradicional no mercado de tecidos em São Paulo, nos procurou com um desafio: como trazer sua longa história e qualidade para o mundo digital e conquistar novos clientes? Afinal, tradição e inovação podem andar de mãos dadas! 😉 Criamos então uma linha de comunicação vibrante e moderna, costurando uma estratégia completa de marketing! 🪡🧵 O que fizemos? Desde a criação de um conteúdo envolvente para as redes sociais, mostrando a beleza e versatilidade dos tecidos, até a produção de fotos e anúncios vídeos de alta qualidade que destacam a textura e a cor, mergulhamos no universo Center Fabril! Implementamos campanhas segmentadas, alcançando o público certo com a mensagem certa. 🎯
      `,
  },
  {
    id: "item12",
    client: "Real Green",
    title: "CARRINHOS DE GOLFE NO BRASIL COM REAL GREEN",
    category: "Digitais",
    description: "Descrição detalhada do item 12",
    video1: videoReal,
    content: `  
        A grama é sempre mais verde com a Real Green! E mais verde ainda quando falamos da parceria entre a Real Green e a Toro, gigante mundial do golfe! 🏆 Nosso desafio é criar um roteiro que mostrasse ao Brasil que a Real Green é a distribuidora oficial da Toro no país, uma marca icônica e sinônimo de qualidade no mundo do golfe. Precisávamos conectar a expertise da Real Green com o prestígio da Toro. Nossa solução foi um roteiro matador para as mídias digitais, destacando a excelência dos produtos Toro e a confiabilidade da Real Green como distribuidora. O resultado foi um vídeo que é um hole-in-one para quem busca o melhor para o seu campo de golfe. 🏌️‍♂️  
      `,
  },
];
