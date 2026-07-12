import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function ContactCTA() {
    return (
        <section className="section-padding">
            <Container>
                <div className="rounded-[32px] border-[4px] border-black bg-[var(--yellow)] p-10 shadow-[10px_10px_0px_#000] md:p-16">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="font-heading text-5xl font-black leading-none md:text-7xl">
                            Let &apos;s Build Something Amazing Together
                        </h2>

                        <p className="mt-6 text-lg text-neutral-700">
                            Open for exciting opportunities, collaborations and ambitious ideas.
                        </p>

                        <div className="mt-10 flex flex-wrap justify-center gap-4">
                            <Button size="lg">
                                Let &apos;s Talk
                            </Button>

                            <Button
                                size="lg"
                                variant="outline"
                            >
                                Download Resume
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}