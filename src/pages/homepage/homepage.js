import { NavLink } from "react-router-dom";

export const HomePage = () => {
    return <div className="pt-20 text-center text-cyan-600">
        <p className="text-center md:text-8xl mb-10 text-5xl">Wanna play Tic-tac-toe?</p>
        <button className="px-5 py-1 rounded border-2 border-sky-500 bg-white hover:bg-sky-500 hover:text-white">
            <NavLink to="game" className="text-3xl leading-10">Play!</NavLink>
        </button>
        </div>
}