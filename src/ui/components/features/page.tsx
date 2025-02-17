import FeatureRoot from "./featureRoot";
import FeatureContent from "./featureContent";
import FeatureFooter from "./featureFooter";

export default function Features() {
  return (
    <FeatureRoot>
      <FeatureContent
        shortText="Easy integration"
        title="Work smarter not harder"
        subtitle="Minha mansão sempre estará lotada de mulheres belas, daquelas singelas que tu vê, por aê na TV. Tu pode achar que eu to fazendo algum truque mas as minas são tipo mulher do caldeirão do Huck."
        className="rounded-tl-2xl border-t-2 border-l-2 border-[#5f5ddf]"
      />
      <FeatureContent
        shortText="Secure & trustworthy"
        title="Sleep easy, we got your dog"
        subtitle="Várias idades, cidades, sutaques, variedade sempre uma namoradas dão ataque. Banheira de hidromassagem com as mina passando nua, os parceiro só de toalha chamando as mulher na rua. "
        className="rounded-tr-2xl border-t-2 border-[#5f5ddf] border-r-2 bg-gradient-to-b from-[#151477] to-[#080D27]"
      />
      <FeatureFooter />
    </FeatureRoot>
  );
}
