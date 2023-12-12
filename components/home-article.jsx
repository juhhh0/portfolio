import Badge from "./ui/badge";

export default function HomeArticle({ title, link, children, stacks, img, desc }) {

    return (
        <article className="home-article">
            <ul>
                <li>
                    <h3 className="font-bold text-lg text-center py-3">{title}</h3>
                </li>
                <li>
                    {link ? (
                        <a target="_blank" href={link} className="thumbnail">
                            <p className="p-3">voir le site</p>
                            <img src={img} alt={`${title} thumbnail`} />
                        </a>
                    ) : (
                        <>
                            <div className="thumbnail">
                                <img src={img} alt={`${title} thumbnail`} />
                                <p className="">sortie courant 2024</p>
                            </div>
                        </>
                    )
                    }
                </li>
                <li><p>{desc}</p></li>
                <li>
                    <Badge label="Technos" color="yellow" />
                    <p className="py-1">{stacks.join(", ")}</p>
                </li>
                <li>
                    <Badge label="Tasks" color="green" />
                    <div className="py-1">
                        {children}
                    </div>

                </li>
            </ul>
        </article>
    )
}