import Title from "@/components/Title/Title"
import { useContext, useEffect } from "react";
import { REMContext } from "@/contexts/REMAPI/REMContext";




export default function REMPersonnage() {

    const { personnage, fetchPersonnages, getPersonnage } = useContext(REMContext);

    useEffect(() => {
        fetchPersonnages();
    }, []);

    return (

        <>
            {Object.keys(personnage).length <= 0    && (
                <p>Chargement des données en cours...</p>
            )}
            {Object.keys(personnage).length > 0 && (


                <>
                    <div className=" grid grid-cols-12 gap-4  ">
                    <button className="bg-transparent hover:bg-blue-500  font-semibold py-2 px-4 border border-dark hover:border-transparent rounded col-span-2 col-start-6" onClick={getPersonnage} >
                        Nouveau personnage
                    </button>
                    <article className=" col-span-12 flex justify-center flex-col  mx-auto p-10 border-5 border-blue-300 shadow-lg">
                        <Title
                            title={`${personnage?.name}`}
                            levelTitle={2}
                        />
                        <img src={personnage?.image} alt={`Image de ${personnage?.name}`}  />

                        <p>
                            <strong>Status</strong> : {personnage?.status}

                        </p>
                        <p>
                            <strong>Genre</strong> : {personnage?.gender}

                        </p>
                        <p>
                            <strong>Espèce</strong> : {personnage?.species}

                        </p>
                        <p>
                            <strong>Origin</strong> : {personnage?.origin}

                        </p>
                        {/*   <p>
                        <strong>Expression</strong> : {
                            personnage?.sayings[
                            Math.random() * (personnage?.sayings?.length !== "NaN" ? personnage?.sayings?.length : 0)
                            ]
                        }

                    </p> */}



                    </article>
                    </div>
                    </>)}



        </>

    )




}