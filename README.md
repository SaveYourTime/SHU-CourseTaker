# SHU-CourseTaker

#### 每次選課時總是...
` 待在電腦前3、4個小時都搶不到想要的課嗎？ `  
` 終於看到要選的課點擊送出卻顯示名額已滿？ `  
` 朋友要把課程退選讓給你，卻被別人搶走嗎？ `  
**```現在有了搶課神器，只要給定相關課程條件就可以雙手一攤，讓CourseTaker幫你完成費時費力的搶課操作了```**  

![][takingcourse]

<p align=center>
<a target="_blank" href="https://opensource.org/licenses/MIT" title="License: MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg"></a>
<a target="_blank" href="http://makeapullrequest.com" title="PRs Welcome"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"></a>
</p>

## 如何開始 / Getting Started

1. 👆🏻 點開 [```Course Taker.js```](/Course Taker.js) ，複製裡面所有程式碼。  
Click on the [```Course Taker.js```](/Course Taker.js) file above, copy all the code inside the js file.

2. ⚙️ 修改程式碼中的相關條件
Edit the condition.

| 條件名稱 | 描述 |
| ------------- | ----------- |
| courseCode | 課程簡碼 |
| courseName | 課程名稱 |
| teacher | 授課教師 |
| period | 星期節次 |

![condition](/img/condition.png)

` 如果只需要設定其中幾項條件，則只需要將不設定條件的內容清除即可。`

##### 例如：只要是週一6~7節的課程都可以接受，並不限定課程簡碼與授課老師，則條件設定如下

```javascript
const condition = [
  {
    courseCode: 'GENS-417-01-A1',
    courseName: '台灣史',
    teacher: '楊碧川',
    period: '一-6~7',
  },
];
```

### 如何使用 / How to use

1. 🔒 登入到選課系統

2. 🖱 選擇【加選(圈選)】的頁面

`盡量將網頁上的條件設定好，減少搜尋結果（目前只支援處理一個搜尋結果頁面中的課程，在2,3,4...頁面中的課程，並不會進行處理！）`

![takecourse](/img/takecourse.png)

3. ⌨️ Windows系統 按下F12 (Mac系統 按下command + option + i) ，開啟【開發人員模式】

![developer](/img/developer.png)

4. 🔁 將複製好的程式碼，貼到console區塊並按下Enter送出，即開始自動化搶課作業

![console](/img/console.png)

--------------------------------
[takingcourse]:/img/takingcourse.gif
