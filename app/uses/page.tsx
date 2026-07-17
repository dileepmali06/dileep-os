import { ContactCTA } from "@/components/sections/contact";
import { AIToolsSection } from "@/components/uses/ai-tools-section";
import { EditorSection } from "@/components/uses/editor-section";
import { HardwareSection } from "@/components/uses/hardware-section";
import { ProductivityToolsSection } from "@/components/uses/productivity-section";
import { SoftwareSection } from "@/components/uses/software-section";
import { UsesHero } from "@/components/uses/uses-hero";
import { WorkflowSection } from "@/components/uses/workflow-section";
import { getUses } from "@/sanity/services/uses";

export default async function UsesPage() {
  const uses = await getUses();
  return (
    <>
      <UsesHero />
      <HardwareSection data={uses.hardware} />
      <SoftwareSection
        data={uses.software}
      />

      <EditorSection
        editor={uses.editor}
        extensions={uses.extensions}
      />

      <WorkflowSection
        browser={uses.browser}
        terminal={uses.terminal}
      />

      <AIToolsSection
        data={uses.aiTools}
      />

      <ProductivityToolsSection
        data={uses.productivityTools}
      />

      <ContactCTA />
    </>
  );
}