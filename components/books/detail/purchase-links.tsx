import { ExternalLink, ShoppingCart, Globe, Star } from "lucide-react";

import { Container } from "../../ui/container";

type PurchaseLinksProps = {
    purchaseLink?: string;
    goodreadsLink?: string;
    officialLink?: string;
};

export default function PurchaseLinks({ purchaseLink, goodreadsLink, officialLink }: PurchaseLinksProps) {
    const links = [
        { url: purchaseLink, label: "Buy the book", sub: "Get your copy", icon: ShoppingCart, color: "var(--yellow)" },
        { url: goodreadsLink, label: "Goodreads", sub: "Ratings & reviews", icon: Star, color: "var(--green)" },
        { url: officialLink, label: "Official site", sub: "Author / publisher", icon: Globe, color: "var(--blue)" },
    ].filter((link) => link.url);

    if (!links.length) return null;

    return (
        <section className="pb-16">
            <Container>
                <div className="mx-auto max-w-3xl">
                    <p className="mb-6 text-center font-mono text-xs font-bold uppercase tracking-widest text-neutral-400">
                        Where to find it
                    </p>

                    <div className="grid gap-5 sm:grid-cols-3">
                        {links.map((link) => (

                            <a key={link.label}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative flex overflow-hidden rounded-xl border-[2px] border-black bg-white shadow-[4px_4px_0px_#000] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000]"
                            >
                                {/* icon stub */}
                                <div
                                    className="flex w-16 shrink-0 items-center justify-center border-r-[2px] border-dashed border-black/70"
                                    style={{ background: link.color }}
                                >
                                    <link.icon size={20} />
                                </div>

                                {/* perforation notches */}
                                <span className="absolute -left-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-[2px] border-black bg-neutral-50" />
                                <span className="absolute left-[62px] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-[2px] border-black bg-neutral-50" />

                                {/* label stub */}
                                <div className="flex flex-1 flex-col justify-center gap-0.5 px-4 py-3.5">
                                    <p className="text-sm font-black leading-tight">{link.label}</p>
                                    <p className="text-[11px] font-medium text-neutral-400">{link.sub}</p>
                                </div>

                                <ExternalLink
                                    size={14}
                                    className="absolute right-3 top-3 text-neutral-300 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-black"
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}