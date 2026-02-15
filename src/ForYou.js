import "./ForYou.css"
import img  from "./illustrain09-pengin1.png"
function ForYou({goIndex}){
    return(
        <div className = "background">
        <div className = "Inflist-panel"></div>
            <img className = "image1" src={img} />
            <h1 className = "information">For You </h1>
            <p className = "No1">
                English Noteをご利用いただき, 誠にありがとうございます.
            </p>
            <p className = "No2">
                本サイトは，すべて一人で手打ちしております．
            </p>
            <p className = "No3">
                したがって, 誤字脱字,内容の誤りなどでご不便をおかけする可能性があります．
            </p>
            <p className = "No4">
                なにか誤りを見つけた際や，質問がある場合はお気軽にご連絡ください．
            </p>
            <p className = "No5">
                また, デザインや技術的なアドバイスも，今後の参考とさせていただきますので
            </p>
            < p className = "No6">いつでもお待ちしております.</p>
            <p className = "No7"> English Noteがあなたの勉強に役立つことを願います.</p>
            <p className = "No8"> Have a nice day !</p>
            <p className = "goback">前画面に戻る</p>
            <button className = "gobackbutton" onClick = {()=>goIndex()}>戻る</button>
        </div>
    )
}
export default ForYou;