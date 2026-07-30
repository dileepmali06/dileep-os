"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function ContactCTA() {
  return (
    <section className="section-padding">
      <Container>
        <div className="rounded-3xl sm:rounded-4xl border-[3px] md:border-4 border-black bg-(--yellow) p-6 sm:p-10 md:p-16 shadow-[6px_6px_0px_#000] sm:shadow-[10px_10px_0px_#000]">
          <div className="mx-auto max-w-3xl text-center">
            
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-black wrap-break-word">
              Ready To Build?
            </h2>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl font-medium text-neutral-800 max-w-2xl mx-auto wrap-break-word">
              Open for exciting opportunities, collaborations and ambitious ideas.
            </p>

            <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md mx-auto sm:max-w-none">
              <Button 
                size="lg"
                className="w-full sm:w-auto font-heading font-black text-sm sm:text-base border-2 border-black shadow-[3px_3px_0px_#000] active:translate-x-px active:translate-y-px active:shadow-[2px_2px_0px_#000] transition-all"
              >
                Let&apos;s Talk
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto font-heading font-black text-sm sm:text-base border-2 border-black bg-white shadow-[3px_3px_0px_#000] active:translate-x-px active:translate-y-px active:shadow-[2px_2px_0px_#000] transition-all"
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
