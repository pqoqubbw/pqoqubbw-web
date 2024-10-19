import { FlickeringGrid } from "@/components/flickering";
import { Footer } from "@/components/footer";
import * as FadeIn from "@/components/motion/staggers/fade";
import { Posts } from "@/components/posts";

const Spacer = () => <div style={{ marginTop: "24px" }} />;

export default function Home() {
  return (
    <FadeIn.Container>
      <FadeIn.Item>
        <div className="flex justify-between">
          <div>
            <h1>pqoqubbw</h1>
            <h2>trying to make the web a better place</h2>
          </div>
        </div>
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <p>
          hey, i'm dmytro and im a developer who works on both frontend and
          backend, but my true passion lies in design engineering. i love
          focusing on user experience, paying close attention to every detail,
          and creating beautiful and intuitive interfaces that blend aesthetics
          with usability. here i'll be sharing components that catch my eye and
          ones i've crafted myself, always striving to create experiences that
          are not just visually appealing but also highly functional.
        </p>
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <FlickeringGrid
          color="#8145b5"
          gridGap={8}
          squareSize={15}
          flickerChance={0.2}
          height={100}
          maxOpacity={0.8}
        />
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <Posts category="examples" />
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <Footer />
      </FadeIn.Item>
    </FadeIn.Container>
  );
}
