import ceza from '../assets/alan/ceza.webp'
import bilisim from '../assets/alan/bilişim.jpg'
import aile from '../assets/alan/aile.jpg'
import ticaret from '../assets/alan/ticaret.webp'
import isHukuku from '../assets/alan/iş.jpg'
import gayrimenkul from '../assets/alan/gayri.jpeg'
import miras from '../assets/alan/miras.jpg'
import idari from '../assets/alan/idari.webp'
import saglik from '../assets/alan/saglık.jpg'
import icra from '../assets/alan/icra.webp'
import sozlesme from '../assets/alan/sözleşme.jpeg'
import vatan from '../assets/alan/vatan.jpg'
import sigorta from '../assets/alan/sigorta.webp'




export interface PracticeArea {
  title: string
  description: string
  image: string
  key:string
}

export const practiceAreas: PracticeArea[] = [
  {
    key: "ceza",
    title: 'Ceza Hukuku',
    description:
      'Başlıca uzmanlık alanlarımızdan olan Ceza Hukuku’na ilişkin yargılamanın tüm aşamalarında müvekkillerimizin haklarını alanın gerektirdiği hassasiyete uygun şekilde korumaya özen gösteriyoruz. Savunma ve adaletin önemli bir savunucusu olarak, suçlamalarla mücadele ederken adaletin tecelli etmesi için kararlılıkla çalışıyoruz.',
          image: ceza  },


  
  {
        key: "bilişim",

    title: 'Bilişim Hukuku',
    description:
      'Dijital dünyanın hızla geliştiği günümüzde, bilişim hukuku verilerin gizliliğini koruma, siber saldırılara karşı savunma ve dijital işlemlerin yasal çerçevesini oluşturma görevini üstlenir. Bilişim Hukuku’nda, müvekkillerimizi dijital dünyada güvende tutarken, yeniliklere de açık bir şekilde yol gösteriyoruz.',
image: bilisim  },
  {
        key: "aile",

    title: 'Aile Hukuku',
    description:
      'Aile Hukuku, duygusal ve hukuksal hassasiyeti bir araya getiren bir alandır. Boşanma, velayet ve mal paylaşımı gibi konularda, aile değerlerine saygı duyarak, müvekkillerimizin geleceğini en iyi şekilde korumak için hukuki çözümler sunuyoruz.',
image: aile  },
  
  
  {
        key: "ticaret",

    title: 'Ticaret Hukuku',
    description:
      'Ticaretin hızla değişen dünyasında, iş dünyasının ihtiyaçlarına uygun hukuki çözümler sunmak temel hedefimiz. Ticaret Hukuku’nda, şirket kuruluşundan sözleşme yönetimine kadar her adımda müvekkillerimize rehberlik ederek, ticaretin büyümesine katkı sağlıyoruz.',
image: ticaret  },
      

  
  {
        key: "iş",

    title: 'İş Hukuku',
    description:
      'İş dünyasının dinamikleri içerisinde, çalışanların haklarını korumak ve işverenlerin adil bir şekilde yönetilmesini sağlamak amacıyla İş Hukuku alanında uzmanlaştık. İş ilişkilerinin sağlıklı bir şekilde yürümesini temin ederken, iş dünyasına hukuki perspektif sunuyoruz.',
image: isHukuku  },


  
  {
        key: "gayri",

    title: 'Gayrimenkul Hukuku',
    description:
      'Mülkiyet ve taşınmaz işlemler, hayatımızın önemli dönemeçlerini oluşturur. Gayrimenkul Hukuku’nda, tapu işlemlerinden kira sözleşmelerine kadar geniş bir yelpazede, müvekkillerimize mülkiyet haklarını güvenle yönetme ve işlem yapma imkanı sunuyoruz.',
image: gayrimenkul  },
  
  {
        key: "miras",

    title: 'Miras Hukuku',
    description:
      'Miras, aile bağlarının ve kişisel birikimlerin devamlılığını temsil eder. Miras Hukuku’nda, adil ve uygun miras dağılımı sağlamak amacıyla müvekkillerimize danışmanlık yaparken, duygusal hassasiyeti gözetiyoruz.',
image: miras  },

  
  {
        key: "idare",

    title: 'İdare Hukuku',
    description:
      'Kamu hizmetlerinin düzenlenmesi ve idari işlemlerin denetimi, toplumun refahı için hayati öneme sahiptir. İdare Hukuku’nda, bireylerin haklarını korumak ve devletle adil bir denge sağlamak için hukuki destek sağlıyoruz.',
image: idari  },

  
  {
        key: "saglık",

    title: 'Sağlık Hukuku',
    description:
      'Sağlık hizmetleri, insanların en temel ihtiyaçlarından biridir ve sağlık hukuku bu alandaki düzenlemeleri kapsar. Sağlık Hukuku’nda, sağlık profesyonellerini ve sağlık kuruluşlarını yasal mevzuata uygun bir şekilde yönlendirirken, hastaların haklarını da koruma altına alıyoruz.',
image: saglik  },

  
  {
        key: "icra",

    title: 'İcra ve İflas Hukuku',
    description:
      'İcra ve iflas hukuku, borçların tahsil edilmesi ve borçluların mali durumlarının düzenlenmesi için oluşturulmuş bir hukuk dalıdır. Alacaklıların haklarını korurken, borçluların da iflas sürecinde adil bir şekilde muamele görmesini sağlamaktayız. İcra, borcun zorla tahsil edilmesi anlamına gelirken, iflas ise borçlunun mal varlığının tasfiyesi sürecidir. Bu hukuk dalı, hem bireyler hem de şirketler için önemli düzenlemeler içerir. Türkiye’de bu konudaki özel yasalar ve yönetmelikleri güncel olarak takip ederek hızlı ve pratik çözümler sunuyoruz.',
image: icra  },

  
  {
        key: "sozlesme",

    title: 'Sözleşmeler Hukuku',
    description:
      'Sözleşmeler hukuku, taraflar arasındaki anlaşmaların yasal çerçevesini belirleyen hukuk dalıdır. Sözleşmelerin kurulması, ifası, ek protokol düzenlemeleri, yorumlanması ve feshi gibi konularda danışmanlık hizmeti sunmaktayız. Sözleşmenin geçerliliği için tarafların rızası, konunun belirli olması ve yasal bir amaca hizmet etmesi ve mütaalası uzmanlık gerektiren diğer sürecin alanında uzman ekibimizle doğru bir şekilde yerine getirilmesini taahhüt ediyoruz. İhlal durumunda, zarar gören taraf için hukuki sonuçlar doğabilecek olup Türkiye’de Borçlar Kanunu, sözleşmeler hukukunun temel kaynağını oluşturur.',
image: sozlesme  },

  
  {
        key: "vatan",

    title: 'Vatandaşlık Hukuku',
    description:
      'Vatandaşlık hukuku, kişilerin vatandaşlık kazanması, kaybetmesi ve aktarılması ile ilgilenir. Türkiye, göç alan ve veren bir ülke olarak, yerli ve yabancı müvekkillere hukuki destek sağlamayı amaçlıyoruz. Alanında uzman kadromuzla Yabancıların oturma ve çalışma izni başvurularını yapmayı, gelişmeleri takip etmeyi ve sonuçlandırmayı, çalışma izni alanların ailelerine ikamet izni sağlamayı, vatandaşlık başvurularını yöneterek olumlu sonuçlandırmayı hedefliyoruz.',
image: vatan  },
  
  {
        key: "sigorta",

    title: 'Sigorta Hukuku',
    description:
      'Başlıca uzmanlık alanlarımızdan olan Sigorta Hukuku kapsamında, sigorta sözleşmelerinden doğan uyuşmazlıklarda müvekkillerimizin haklarını titizlikle korumaktayız. Sigorta şirketleri ile yaşanan ihtilaflarda, tazminat taleplerinden poliçe yorumlarına kadar geniş bir yelpazede müvekkillerimizi etkin biçimde temsil ediyoruz. Bu doğrultuda, sigortalıların hak kaybına uğramaması için adaletin sağlanması adına kararlılıkla çalışıyoruz.',
image: sigorta  },


]
