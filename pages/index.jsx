import HomeArticle from "../components/home-article";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Joris dev</title>
        <meta
          name="description"
          content="Mon portfolio developpeur javascript, React"
          key="desc"
        />
      </Head>
      <div>
        <p className="text-center underline underline-offset-2">Je suis disponible dès fevrier 2024 !</p>
        <div className="text-center pt-3">
          <h2 className="display text-4xl">Joris Mansion</h2>
          <p>Developpeur JS / React</p>
        </div>
        <h2 className="display text-3xl py-4">En ce moment</h2>
        <p>Je finis mon alternance chez Prodigious en début d&apos;année 2024 en même temps que ma certification Developpeur Web et Web mobile chez Simplon.</p>
        <p>Durant cette année d&apos;alternance j&apos;ai pu travailler sur de gros projets en React JS et c&apos;est dans cette voie que j&apos;aimerai me spécialiser</p>
        <h2 className="display text-3xl py-4">Mes réalisations pros</h2>
        <p>Durant mon année a Prodigious j&apos;ai pu travailler sur deux sites principalement :</p>
        <div className="md:flex pb-6">

          <HomeArticle
            title="Samsung Members"
            link="https://members.samsung.fr"
            stacks={["Next JS", "Apollo Client", "Tailwind CSS"]}
            img="/samsung-thumbnail.png"
            desc="Maintenance sur la partie front end, évolutions du client"
          >
            <p>Dynamisation des composants, developpement de nouvelles fonctionnalités</p>
          </HomeArticle>

          <HomeArticle
            title="ESSEC Business School"
            stacks={["Next JS", "Contentful", "GraphQL"]}
            img="/essec-thumbnail.png"
            desc="Refonte du site existant, gestion frontend et back office"
          >
            <p>Developpement des composants, dynamisation</p>
            <p>Gestion back office, gestion API</p>
          </HomeArticle>

        </div>

        <p>En 2021, j&apos;ai pu effectuer un stage d&apos;intégrateur web auprès d&apos;un auto-entrepeneur, j&apos;ai pu participé à la publication de deux sites :</p>
        <div className="md:flex">

          <HomeArticle
            title="Isec Formation"
            link="https://isec.re/"
            stacks={["CMS"]}
            img="/isec-thumbnail.png"
            desc="Creation d&apos;un site pour l'école ISEC basé à la Reunion"
          >
            <p>Création du site avec CMS</p>
          </HomeArticle>
          <HomeArticle
            title="Rêves de Résidents"
            link="https://revesderesidents.com/"
            stacks={["CMS"]}
            img="/reves-de-residents-thumbnail.png"
            desc="Création d&apos;un blog pour l'association ORPEA "
          >
            <p>Création du site avec CMS</p>
          </HomeArticle>


        </div>
      </div>
    </>
  )
}

