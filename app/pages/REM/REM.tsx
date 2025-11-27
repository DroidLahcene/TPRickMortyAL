import REMPersonnage from "@/components/REMPersonnage/REMPersonnage";
import { REMProvider } from "@/contexts/REMAPI/REMContext";


export default function REM() {




    return (
        <>
        <REMProvider>
            <REMPersonnage />
        </REMProvider>
        </>
    );
}