<template>
    <div class="business">
        <h3>
            请填写您的信息：
        </h3>
        <ul>
            <li>
                <img src="../../images/2_03.jpg" alt="意向代理城市">
                <label for="n1">意向代理城市：</label>
                <input name="n1" type="text" placeholder="请输入信息">
                <i>*</i>
            </li>
            <li>
                <img src="../../images/2_07.jpg" alt="公司或机构名称">
                <label for="n2">公司或机构名称：</label>
                <input name="n2" type="text" placeholder="请输入信息">
                <i>*</i>
            </li>
            <li>
                <img src="../../images/2_10.jpg" alt="">
                <label for="n3">联系人姓名：</label>
                <input name="n3" type="text" placeholder="请输入信息">
                <i>*</i>
            </li>
            <li>
                <img src="../../images/2_12.jpg" alt="联系人电话">
                <label for="n4">联系人电话：</label>
                <input name="n4" type="text" placeholder="请输入信息">
                <i>*</i>
            </li>
            <li>
                <img src="../../images/2_15.jpg" alt="联系人邮箱">
                <label  for="n5">联系人邮箱：</label>
                <input name="n5" type="text" placeholder="请输入信息">
                <i>*</i>
            </li>
            <li>
                <img src="../../images/2_18.jpg" alt="请输入信息">
                <label for="n6">公司/个人地址：</label>
                <input name="n6" type="text" placeholder="请输入信息">
                <i>*</i>
            </li>
            <li>
                <img src="../../images/2_21.jpg" alt="请输入信息">
                <label for="n7">公司/个人优势：</label>
                <input name="n7" type="text" placeholder="请输入信息">
                <i>*</i>
            </li>
            <li>
                <button>提交信息</button>
            </li>
        </ul>
        <h3>联系我们：</h3>
        <ul>
            <li>
                <img src="../../images/2_23.jpg" alt="联系人">
                <span>联系人：</span>
                <span>王先生</span>
            </li>
            <li>
                <img src="../../images/2_26.jpg" alt="电话">
                <span>电话：</span>
                <span>18701521668</span>
            </li>
            <li>
                <img src="../../images/2_18.jpg" alt="地址">
                <span>地址：</span>
                <span>北京市亦庄中和谐14号</span>
            </li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
.business {
  color: #666;
  font-size: 0.24rem;

  h3 {
    padding: 0.2rem;
    font-size: 0.24rem;
    margin-top: 0.12rem;
  }
  ul {
    background-color: #fff;
    padding: 0.2rem;

    li {
      padding: 0.18rem 0.1rem;
      display: flex;
      position: relative;
      border-bottom: 1px solid #f5f5f5;
      img {
        width: 0.25rem;
        height: 0.25rem;
      }
      label {
        margin: 0rem 0.12rem;
      }
      input {
        color: #999;
        border: none;
        font-size: 0.24rem;
        outline: none;
      }

      span {
        margin-left: 0.12rem;
      }
      i {
        position: absolute;
        top: 0.28rem;
        right: 0.2rem;
        color: red;
      }
    }
    li:nth-child(8) {
      justify-content: flex-end;
      margin-top: 0.5rem;
      border-bottom: none;
      button {
        background-color: #fc9c20;
        border-radius: 0.05rem;
        border: none;
        padding: 0.08rem 0.17rem;
        color: #fff;
      }
    }
  }
  ul:nth-child(4) {
    margin-bottom: 0.52rem;
    li:nth-child(3) {
      border: none;
    }
  }
}
</style>
