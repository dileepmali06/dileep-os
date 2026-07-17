import { getNowSection } from "@/sanity/services/now";

import { NowHero } from "@/components/now/now-hero";
import { CurrentFocus } from "@/components/now/current-focus";
import { CurrentlyBuilding } from "@/components/now/currently-building";
import { CurrentlyLearning } from "@/components/now/currently-learning";
import { CurrentGoals } from "@/components/now/current-goals";
import { ReadingWatching } from "@/components/now/reading-watching";
import { NowStack } from "@/components/now/now-stack";
import { LifeUpdate } from "@/components/now/life-update";
import { LastUpdated } from "@/components/now/now-last-updated";


export default async function NowPage() {
    const now = await getNowSection();

    return (
        <>
            <NowHero data={now} />
            <CurrentFocus
                data={now}
            />

            <CurrentlyBuilding
                data={now}
            />

            <CurrentlyLearning
                data={now}
            />

            <CurrentGoals
                data={now}
            />

            <ReadingWatching
                data={now}
            />

            <NowStack data={now} />

            <LifeUpdate data={now} />

            <LastUpdated data={now} />
        </>
    );
}