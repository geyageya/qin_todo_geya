import type { VFC } from "react";

export const GeyaTitle: VFC = () => {
  return (
    //見出しコンポーネント(今日する)を作成
    <div className="m-4">
      <div>
        <h1
          className="
                font-mono
                text-22px
                text-primary-rose"
        >
          GEYA
        </h1>
      </div>
    </div>
  );
};
