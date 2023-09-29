import { useState } from 'react'
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

export function Networks(){
    const [facebook, setFacebook] = useState("")
    const [instagram, setInstagram] = useState("")
    const [youtube, setYoutube] = useState("")

    return (
        <div className="flex items-center flex-col min-h-screen pb-7 px-2">
            <Header />

            <h1 className="text-white text-2xl font-medium mt-8 mb-4">Minha redes sociais</h1>

            <form className="flex flex-col max-w-xl w-full">
                <label className="text-white font-medium mt-2 mb-2">Link do facebook</label>
                <Input 
                    type="url"
                    placeholder="Digite a url do facebook:"
                    value={facebook}
                    onChange={ (e) => setFacebook(e.target.value) }
                />

                <label className="text-white font-medium mt-2 mb-2">Link do instagram</label>
                <Input 
                    type="url"
                    placeholder="Digite a url do instagram:"
                    value={instagram}
                    onChange={ (e) => setInstagram(e.target.value) }
                />

                <label className="text-white font-medium mt-2 mb-2">Link do youtube</label>
                <Input 
                    type="url"
                    placeholder="Digite a url do youtube:"
                    value={youtube}
                    onChange={ (e) => setYoutube(e.target.value) }
                />
            </form>
        </div>
    )
}