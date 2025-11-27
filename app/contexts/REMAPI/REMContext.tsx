import { createContext, useState, type ReactNode } from "react";

export const REMContext = createContext<any>({});

export function REMProvider({ children }: { children: React.ReactNode }) {

    const [personnage, setPersonnage] = useState({});
    const [personnages, setPersonnages] = useState([]);
    const [charactersPool, setCharactersPool] = useState([]);
    const [loading, setLoading] = useState(false);

    async function fetchPersonnages() {
        if (personnages.length > 0 || loading) {
            return;
        }




        setLoading(true);

        try {

            const response = await fetch("https://api.sampleapis.com/rickandmorty/characters");
            
            if (!response.ok) {
                throw new Error("Une erreur s'est produite lors du chargement de l'API REM");
            }

            const datas = await response.json();

            setPersonnages(datas);
            setPersonnage(datas[Math.floor(Math.random() * datas.length)]);
            setLoading(false);

        } catch (err) {
            console.error(err);
            setLoading(false);
        }


    }
    function getPersonnage() {
        if (personnages.length <= 0) {
            return;
        }







        /* 
        
                setPersonnage(charactersPool[
                    const randomCharacter = charactersPool[]
                    Math.floor(Math.random() * personnages.length)
                ]); */

        setPersonnage(() => {
            const currentPool = 
            charactersPool.length > 0 //condition
                ? charactersPool //premier resultat
                : personnages; // deuxieme resultat

            const randomCharacter =
                currentPool[
                Math.floor(Math.random() * currentPool.length)
                ];

            setCharactersPool(() => {
                return currentPool.filter((character) => character !== randomCharacter)
            });


            return randomCharacter;


        })
    }

    return (
        < REMContext.Provider value={{
            personnage,
            fetchPersonnages,
            getPersonnage

        }}>
            {children}
        </REMContext.Provider>
    );



}