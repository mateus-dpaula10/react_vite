import { BsCartPlus } from 'react-icons/bs'

export function Home(){
    return (
        <div>
            <main className="w-full max-w-7xl px-4 mx-auto">
                <h1 className="font-bold text-2xl mb-4 mt-10 text-center">Produtos em alta</h1>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
                    <section className="w-full">
                        <img 
                            className="w-full rounded-lg max-h-70 mb-2"
                            src="data:image/jpeg;base64,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" 
                            alt="Logo do produto" 
                        />
                        <p className="font-medium mt-1 mb-2">Airpods</p>
                        <div className="flex gap-3 items-center">
                            <strong className="text-zinc-700/90">
                                R$ 10,00
                            </strong>
                            <button className="bg-zinc-900 p-1 rounded">
                                <BsCartPlus size={20} color="#FFF" />
                            </button>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}