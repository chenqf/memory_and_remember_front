// @flow Created by 陈其丰 on 2018/10/24.


export default {
    getSentenceAudioSrc(content){
        content = content.replace(/\s/g,'+').replace(/,/g,'%2C');
        return 'https://dict.youdao.com/dictvoice?audio=' + content + '.&le=eng';
    }
}