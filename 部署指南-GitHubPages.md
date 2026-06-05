# 🚀 数学教学反馈工具 — 部署指南

## 概览

部署到 GitHub Pages 后，你的同事/家长通过**网址**访问，而不是接收文件。
这样他们看不到代码，也无法复制你的成果。

---

## 第一步：注册 GitHub 账号（5分钟）

1. 打开 https://github.com
2. 点右上角 **Sign up**，用邮箱注册
3. **用户名很重要**——你的网址就是 `用户名.github.io`
   - 比如用户名是 `wanglaoshi`，网址就是 `wanglaoshi.github.io`
4. 验证邮箱，完成注册

---

## 第二步：创建仓库

1. 登录 GitHub，点右上角 **+** → **New repository**
2. Repository name 填：`math-feedback`（或任意名字）
3. 选择 **Public**（免费用户只能用 Public）
4. **不要**勾选 "Add a README file"
5. 点 **Create repository**

---

## 第三步：修改代码中的域名

打开 `数学教学反馈app.html`，找到第 2 行：

```javascript
const ALLOWED_HOST='你的用户名.github.io';
```

把 `你的用户名` 改成你注册的 GitHub 用户名。

比如你注册的用户名是 `wanglaoshi`，改成：
```javascript
const ALLOWED_HOST='wanglaoshi.github.io';
```

---

## 第四步：上传代码

打开 PowerShell（在项目文件夹地址栏输入 `powershell` 回车），依次执行：

```powershell
# 1. 关联远程仓库（把下面 YourName 换成你的 GitHub 用户名）
git remote add origin https://github.com/YourName/math-feedback.git

# 2. 提交所有文件
git add .
git commit -m "首次部署"

# 3. 推送到 GitHub（首次需要登录）
git push -u origin main
```

推送时会弹出 GitHub 登录窗口，用浏览器授权即可。

---

## 第五步：开启 GitHub Pages

1. 打开你的 GitHub 仓库页面
2. 点 **Settings**（顶部标签）
3. 左侧菜单点 **Pages**
4. 在 "Branch" 下拉框选 **main**，点 **Save**
5. 等待 1-2 分钟，页面刷新后会显示：
   > ✅ Your site is live at `https://YourName.github.io/math-feedback/`

---

## 第六步：测试

1. 打开 `https://YourName.github.io/math-feedback/数学教学反馈app.html`
2. 应该能正常看到你的应用
3. 试着把 HTML 文件下载到本地双击打开 → 会看到 🔒 锁定页面

---

## 分享给他人

把下面的网址发给同事/家长即可：
```
https://YourName.github.io/math-feedback/数学教学反馈app.html
```

建议在 iPad Safari 中打开后「添加到主屏幕」，体验像原生 App。

---

## 注意事项

| 问题 | 解决 |
|------|------|
| 网址太长不好记 | 可以用短链接服务（如 t.cn）缩短 |
| 想用自己的域名 | 在 GitHub Pages 设置中绑定自定义域名（需在域名 DNS 中添加 CNAME 记录） |
| 代码更新 | 修改后 `git add . && git commit -m "更新" && git push` 即可 |
| 忘记 GitHub 用户名 | 登录 github.com 右上角头像菜单就能看到 |

---

## 进阶保护（可选）

基础域名锁 + 后续可叠加：
- ✅ **域名锁定**（当前已完成）——非授权域名无法运行
- ⬜ **代码混淆**——把 JS 变量名/函数名打乱，即使拿到 HTML 也看不懂
- ⬜ **激活码系统**——每个用户需要独立的激活码

如需继续加强保护，告诉我即可。
