import { Link } from "react-router-dom";

export default function Footer () {

    return (
        <>
        <section className="max-w-[95rem] mx-auto py-5 font-cormorantgaramond px-5">
            <div className="bg-[url(/images/footer.png)] lg:h-[40dvh] h-[80dvh] bg-no-repeat w-full bg-cover bg-center rounded-3xl relative">
                <div className="absolute bg-black/50 inset-0 rounded-3xl"></div>
                <div className="grid grid-cols-1 lg:grid-cols-4 relative h-full lg:p-0 p-5">
                    <div className="flex justify-center items-center">
                        <img src="/images/logo.png" alt="" className="bg-white w-36 rounded-4xl" />
                    </div>
                    <div className="flex justify-center items-center">
                        <div className=" text-xl font-semibold text-white text-center">
                            <a href="#home"><p className="">Home</p></a>
                            <a href="#about"><p className="mt-3">About Us</p></a>
                            <a href="#services"><p className="mt-3">Services</p></a>
                            <a href="#contact"><p className="mt-3">Contact</p></a>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="text-white text-xl font-semibold space-y-3 text-center">
                            <h1 className="font-bold">Address :</h1>
                            <p>No. 5, Near Attur New Busstand</p>
                            <p>Salem, Tamilnadu</p>
                            <p>Pincode : 636112</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-5 relative lg:mb-0 mb-8">
                        <i className="fi fi-brands-facebook text-2xl  cursor-pointer p-2 rounded-full flex justify-center items-center bg-blue-600 text-white"></i>
                        <i className="fi fi-brands-whatsapp  cursor-pointer p-2 rounded-full flex justify-center items-center text-2xl bg-green-500 text-white"></i>
                        <i className="fi fi-brands-instagram cursor-pointer  p-2 rounded-full flex justify-center items-center text-2xl bg-pink-500 text-white"></i>
                    </div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 lg:w-fit w-full lg:px-0 px-3">
                        <p className="bg-white font-semibold text-center lg:px-4 px-2 py-1 rounded-t-xl text-lg">
                            Designed By <Link to={"https://www.zehe.in"} target="_blank" className="text-[#0B3A82]">Zehe Tech</Link>  © 2025
                        </p>
                    </div>
                </div>
            </div>
        </section>
        

        </>
    )
}