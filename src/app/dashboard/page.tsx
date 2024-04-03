'use client'
import React, { useEffect, useState } from 'react'
import BarGraph from '@/components/BarGraph';
import PieChartBox from '@/components/PieChartBox';
import Navbar from '@/components/Navbar';



interface ResultData {
  region :string;
  offres: string;
  secteur: string;
  dipuniv: string;
  Tcontrat: any;
  Tdiplome: any; 
  Tsecteur: any; 
}

const Page = () => {
  const [region, setRegion] = useState('Toute la France');
  const [contrat, setContrat] = useState('Tous types de contrats');
  const [diplome, setDiplome] = useState('Tous types de qualification');
  const [result, setResult] = useState<ResultData | null>(null);

  const initial  = {
    Tdiplome : {
        title: "Type de qualification",
        color: "#388E3C",
        dataKey: "total",
        chartData: [
          {
            name: "Cadre",
            total: 1607130,
        },  
          {
                name: "Agent de maîtrise, technicien",
                total: 4888270,
            },
            
            {
              name: "Employé qualifié",
              total: 17230300,
          },
            
            
            {
                name: "Employé non qualifié",
                total: 10372880,
            },
            {
                name: "Ouvrier qualifié",
                total: 4796230,
            }
            ,
            {
                name: "Ouvrier spécialisé, manœuvre",
                total: 4620820,
            }
    
          ]},
    
       Tsecteur : {
          title: "Secteurs d'activités",
          color: "#388E3C",
          dataKey: "offres",
          chartData: [
            {
              name: "AGRICULTURE, SYLVICULTURE ET PÊCHE",
              offres: 1061120
            },
            {
              name: "INDUSTRIES EXTRACTIVES",
              offres: 8050
            },
            {
              name: "FABRICATION DE DENRÉES ALIMENTAIRES, DE BOISSONS ET DE PRODUITS À BASE DE TABAC",
              offres: 911460
            },
            {
              name: "FABRICATION DE TEXTILES, INDUSTRIES DE L'HABILLEMENT, INDUSTRIE DU CUIR ET DE LA CHAUSSURE",
              offres: 125960
            },
            {
              name: "TRAVAIL DU BOIS, INDUSTRIES DU PAPIER ET IMPRIMERIE",
              offres: 143130
            },
            {
              name: "COKÉFACTION ET RAFFINAGE",
              offres: 1360
            },
            {
              name: "INDUSTRIE CHIMIQUE",
              offres: 69700
            },
            {
              name: "INDUSTRIE PHARMACEUTIQUE",
              offres: 22390
            },
            {
              name: "FABRICATION DE PRODUITS EN CAOUTCHOUC ET EN PLASTIQUE AINSI QUE D'AUTRES PRODUITS MINÉRAUX NON MÉTALLIQUES",
              offres: 144490
            },
            {
              name: "MÉTALLURGIE ET FABRICATION DE PRODUITS MÉTALLIQUES À L'EXCEPTION DES MACHINES ET DES ÉQUIPEMENTS",
              offres: 282320
            },
            {
              name: "FABRICATION DE PRODUITS INFORMATIQUES, ÉLECTRONIQUES ET OPTIQUES",
              offres: 62910
            },
            {
              name: "FABRICATION D'ÉQUIPEMENTS ÉLECTRIQUES",
              offres: 51060
            },
            {
              name: "FABRICATION DE MACHINES ET ÉQUIPEMENTS N.C.A.",
              offres: 128340
            },
            {
              name: "FABRICATION DE MATÉRIELS DE TRANSPORT",
              offres: 119610
            },
            {
              name: "AUTRES INDUSTRIES MANUFACTURIÈRES- RÉPARATION ET INSTALLATION DE MACHINES ET D'ÉQUIPEMENTS",
              offres: 289010
            },
            {
              name: "PRODUCTION ET DISTRIBUTION D'ÉLECTRICITÉ, DE GAZ, DE VAPEUR ET D'AIR CONDITIONNÉ",
              offres: 47530
            },
            {
              name: "PRODUCTION ET DISTRIBUTION D'EAU- ASSAINISSEMENT, GESTION DES DÉCHETS ET DÉPOLLUTION",
              offres: 158240
            },
            {
              name: "CONSTRUCTION",
              offres: 1555810
            },
            {
              name: "COMMERCE- RÉPARATION D'AUTOMOBILES ET DE MOTOCYCLES",
              offres: 4239890
            },
            {
              name: "TRANSPORTS ET ENTREPOSAGE",
              offres: 1101510
            },
            {
              name: "HÉBERGEMENT ET RESTAURATION",
              offres: 3678420
            },
            {
              name: "EDITION, AUDIOVISUEL ET DIFFUSION",
              offres: 396910
            },
            {
              name: "TÉLÉCOMMUNICATIONS",
              offres: 54030
            },
            {
              name: "ACTIVITÉS INFORMATIQUES ET SERVICES D'INFORMATION",
              offres: 553410
            },
            {
              name: "ACTIVITÉS FINANCIÈRES ET D'ASSURANCE",
              offres: 620510
            },
            {
              name: "ACTIVITÉS IMMOBILIÈRES",
              offres: 374760
            },
            {
              name: "ACTIVITÉS JURIDIQUES, COMPTABLES, DE GESTION, D'ARCHITECTURE, D'INGÉNIERIE, DE CONTRÔLE ET D'ANALYSES TECHNIQUES",
              offres: 2668540
            },
            {
              name: "RECHERCHE-DÉVELOPPEMENT SCIENTIFIQUE",
              offres: 50650
            },
            {
              name: "AUTRES ACTIVITÉS SPÉCIALISÉES, SCIENTIFIQUES ET TECHNIQUES",
              offres: 758750
            },
            {
              name: "ACTIVITÉS DE SERVICES ADMINISTRATIFS ET DE SOUTIEN",
              offres: 12494980
            },
            {
              name: "ADMINISTRATION PUBLIQUE",
              offres: 1614760
            },
            {
              name: "ENSEIGNEMENT",
              offres: 1999560
            },
            {
              name: "ACTIVITÉS POUR LA SANTÉ HUMAINE",
              offres: 835170
            },
            {
              name: "HÉBERGEMENT MÉDICO-SOCIAL ET SOCIAL ET ACTION SOCIALE SANS HÉBERGEMENT",
              offres: 4310580
            },
            {
              name: "ARTS, SPECTACLES ET ACTIVITÉS RÉCRÉATIVES",
              offres: 541100
            },
            {
              name: "AUTRES ACTIVITÉS DE SERVICES",
              offres: 1895480
            },
            {
              name: "ACTIVITÉS DES MÉNAGES EN TANT QU'EMPLOYEURS",
              offres: 140450
            },
            {
              name: "ACTIVITÉS EXTRA-TERRITORIALES",
              offres: 2610
            },
            {
              name: "ACTIVITÉ INCONNUE",
              offres: 1070
            }
          ]
      },
    
    
      Tcontrat: [
  
        { name: "offre non durable", value: 21145140, color: "#a5da0f" },
        { name: "offre durable", value: 22368570, color: "#388E3C" }
      ],
      offres : 43515630,
      secteur : "ACTIVITÉS DE SERVICES ADMINISTRATIFS ET DE SOUTIEN",
      dipuniv: "ESE"


  }





  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetchCoherentResult({ region, contrat, diplome });
      setResult(res);
    } catch (error) {
      console.error('Error fetching coherent result:', error);
    }
  };

  async function fetchCoherentResult(input: {
    region: string;
    contrat: string;
    diplome: string;
  }): Promise<ResultData | null> {
    try {
      const res = await fetch('/data/data.json');
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await res.json();

      const matchingResult = data.find((item: { input: any }) => {
        const itemInput = item.input;
        console.log("input :" ,region,contrat,diplome )
        return (
          itemInput.region === input.region &&
          itemInput.contrat === input.contrat &&
          itemInput.diplome === input.diplome
       
          );
      });

      if (matchingResult) {
        return matchingResult.result;
      } else {
        throw new Error('No matching result found');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }

  return (
    <><div>
      <div className="relative mr-auto p-8 max-w-7xl px-6 lg:px-8  z-1000">
        <div className="navbar">
          <Navbar />
        </div>
      </div>
      <form onSubmit={handleSubmit}>
      <div className='containerr flex flex-row justify-center  mx-auto  mt-6  p-8 gap-1'>

     
        <div className='flex flex-col'>
        
          <label className="p-4 font-bold" >Region </label>
          <select className='p-2 border m-2    hover:border-green-700  rounded-sm bg-slate-50' name="region" id="region" onChange={(e) => setRegion(e.target.value)}>

            <option value="Toute la France">Toute la France</option>
            <option value="Auvergne-Rhône-Alpes">Auvergne-Rhône-Alpes</option>
            <option value="Bourgogne-Franche-Comté">Bourgogne-Franche-Comté</option>
            <option value="Bretagne">Bretagne</option>
            <option value="Centre-Val de Loire">Centre-Val de Loire</option>
            <option value="Corse">Corse</option>
            <option value="Grand Est">Grand Est</option>
            <option value="Hauts-de-France">Hauts-de-France</option>
            <option value="Ile-de-France">Ile-de-France</option>
            <option value="Normandie">Normandie</option>
            <option value="Nouvelle Aquitaine">Nouvelle-Aquitaine</option>
            <option value="Occitanie">Occitanie</option>
            <option value="Pays de la Loire">Pays de la Loire</option>
            <option value="Provence-Alpes-Côte d'Azur">Provence Alpes Côte d’Azur</option>

          </select>
        </div>


        <div className='flex flex-col'>
          <label className="p-4 font-bold">Type de contrat </label>
          <select className='p-2 border  m-2    hover:border-green-700 rounded-sm bg-slate-50' name="contrat" id="contrat" onChange={(e) => setContrat(e.target.value)}>
          <option value="Tous types de contrats">Tous types de contrats</option>
            <option value="Offre durable">Offre durable</option>
            <option value="Offre non durable">Offre non durable</option>
          </select></div>
        <div className='flex flex-col'>
          <label className="p-4 font-bold">Qualification </label>
          <select className='p-2 border  m-2    hover:border-green-700 rounded-sm bg-slate-50' name="diplome" id="diplome" onChange={(e) => setDiplome(e.target.value)}>
            <option value="Tous types de qualification">Tous types de qualification</option>
            <option value="Ouvrier spécialisé, manœuvre">Ouvrier spécialisé, manœuvre</option>
            <option value="Ouvrier qualifié">Ouvrier qualifié</option>
            <option value="Employé non qualifié">Employé non qualifié</option>
            <option value="Employé qualifié">Employé qualifié</option>
            <option value="Agent de maîtrise, technicien">Agent de maîtrise, technicien</option>
            <option value="Cadre">Cadre</option>
          </select>
          
          </div>

          <button type="submit" className="mt-auto mb-2 bg-green-700 hover:bg-green-900 text-white rounded-md  p-2">Trouver</button>
  
      </div>
    
</form>

{result?  (
 
      <div>
        <div className='containerr flex flex-row p-4 gap-16 justify-center'>


    <div className='border rounded-sm border-green-400 bg-green-50 hover:bg-green-100 w-80 transition-transform duration-300 ease-in-out transform hover:scale-105'>
      <h1 className='text-center text-green-700 p-2'>Nombre d'offres d'emplois</h1>
      <p className='text-center text-green-700 font-bold text-lg p-2'>{result.offres}</p>
    </div>

    <div className='border rounded-sm border-green-400 bg-green-50 hover:bg-green-100 w-80 transition-transform duration-300 ease-in-out transform hover:scale-105'>
      <h1 className='text-center text-green-700 p-2'>Secteur d'activité avec le plus d'offres</h1>
      <p className='text-center text-nowrap truncate ... text-bold text-green-700 font-bold text-lg p-2'>{result.secteur}</p>
    </div>

    <div className='border rounded-sm border-green-400 bg-green-50 hover:bg-green-100 w-80 transition-transform duration-300 ease-in-out transform hover:scale-105'>
      <h1 className='text-center text-green-700 p-2'>Diplôme le plus cohérent</h1>
      <p className='text-center text-nowrap truncate ... text-bold text-green-700 font-bold text-lg p-2'>{result.dipuniv}</p>
    </div>

        </div>


        <div className='flex flex-row w-full gap-6 p-4 justify-center'>
    
          <div className='flex flex-col p-2'>

          <h1 className='mx-auto text-center font-bold text-lg p-2 '> Plus de details sur la region {result.region} </h1>
            <div className='containerr flex flex-row p-2'>
              <div className='containerr justify-center  h-60  w-1/2  p-4'>
                <PieChartBox chartData={result.Tcontrat} />
              </div>
              <div className='containerr justify-center  h-60  w-1/2  p-4'>
                <BarGraph {...result.Tdiplome} />
              </div>
            </div>

            <div className='  h-60  w-full gap-6  p-4'>
              <BarGraph {...result.Tsecteur} />
            </div>

          </div>


        </div>
        
      </div>

    
      ) : (

      
        <div>
          <div className='containerr flex flex-row p-4 gap-16 justify-center'>
  
  
      <div className='border rounded-sm border-green-400 bg-green-50 hover:bg-green-100 w-80 transition-transform duration-300 ease-in-out transform hover:scale-105'>
        <h1 className='text-center text-green-700 p-2'>Nombre d'offres d'emplois</h1>
        <p className='text-center text-green-700 font-bold text-lg p-2'>{initial.offres}</p>
      </div>
  
      <div className='border rounded-sm border-green-400 bg-green-50 hover:bg-green-100 w-80 transition-transform duration-300 ease-in-out transform hover:scale-105'>
        <h1 className='text-center text-green-700 p-2'>Secteur d'activité avec le plus d'offres</h1>
        <p className='text-center text-nowrap truncate ... text-bold text-green-700 font-bold text-lg p-2'>{initial.secteur}</p>
      </div>
  
      <div className='border rounded-sm border-green-400 bg-green-50 hover:bg-green-100 w-80 transition-transform duration-300 ease-in-out transform hover:scale-105'>
        <h1 className='text-center text-green-700 p-2'>Diplôme le plus cohérent</h1>
        <p className='text-center text-nowrap truncate ... text-bold text-green-700 font-bold text-lg p-2'>{initial.dipuniv}</p>
      </div>
  
          </div>
  
  
          <div className='flex flex-row w-full gap-6 p-4 justify-center'>
     
            <div className='flex flex-col p-2'>
  
  
              <div className='containerr flex flex-row p-2'>
                <div className='containerr justify-center  h-60  w-1/2  p-4'>
                  <PieChartBox chartData={initial.Tcontrat} />
                </div>
                <div className='containerr justify-center  h-60  w-1/2  p-4'>
                  <BarGraph {...initial.Tdiplome} />
                </div>
              </div>
  
              <div className='  h-60  w-full gap-6 p-4'>
                <BarGraph {...initial.Tsecteur} />
              </div>
  
            </div>
  
  
          </div>
          
        </div>
  
     
      )}



    </div><div className="mt-auto mx-auto max-w-7xl px-6 lg:px-8">

        <footer className='flex flex-row'>

          <p className="   mx-2 text-wrap regular-14 w-full text-center pt-14 text-sm text-gray-30">
            <p className=" text-gray-500  text-sm">
              
            *Important : Ces graphiques représentent les données 
<a href='https://www.francetravail.fr/' className='text-blue-400'> pole-emploi.org </a>
 pour la période de 2010 à 2023. Le créateur n'est pas responsable des interprétations du tableau de bord.</p>
          </p>

        </footer>
      </div></>

  )
}

export default Page
