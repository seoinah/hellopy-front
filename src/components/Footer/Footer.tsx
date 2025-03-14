import * as React from "react";
import HellopyImg from "@/assets/img/logo/img_hellopy.png";
import DiscordImg from "@/assets/img/logo/img_discord.png";
import YoutubeImg from "@/assets/img/logo/img_youtube.png";
import InstagramImg from "@/assets/img/logo/img_instagram.png";
import { Container } from "@/components/Container";

const Footer: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center bg-footer">
      <Container className="flex max-h-[400px] w-full items-center justify-between py-12">
        <div className="flex flex-col items-start">
          <img className="h-[80px] w-[145px]" src={HellopyImg} alt="logo" />
          <div className="mt-4 flex gap-4">
            <img className="h-[40px] w-[40px]" src={YoutubeImg} alt="youtube" />
            <img className="h-[40px] w-[40px]" src={DiscordImg} alt="discord" />
            <img
              className="h-[40px] w-[40px]"
              src={InstagramImg}
              alt="instagram"
            />
          </div>
          <div className="mt-6 text-sm text-[#FDFAFE]">
            ⓒ 2025. HelloPY. All rights reserved.
          </div>
        </div>

        <div className="flex max-h-[400px] w-1/2 flex-col overflow-hidden">
          <div className="flex w-full gap-8">
            <p className="line-clamp-8 w-1/2 text-base leading-[1.6] text-hellopy-purple-600">
              HelloPY는 모두에게 열린 공간입니다. HelloPY의 모든 참여자가
              존중받고, 차별 없이 협력할 수 있는 포용적인 상호작용을 지향합니다.
              부적절한 언행, 혐오 표현, 폭력적인 행동은 허용되지 않습니다. 함께
              더 나은 커뮤니티를 만들어갑시다!
            </p>
            <p className="line-clamp-8 w-1/2 text-base leading-[1.6] text-hellopy-purple-600">
              HelloPY is an open space for everyone. We strive to create an
              inclusive environment where all participants are treated with
              respect and can collaborate without discrimination. Inappropriate
              language, hate speech, and violent behavior are not tolerated.
              Let's build a better community together!
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
