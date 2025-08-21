---
title: 'Turning GitHub code into a live website'
alt: 'Turning GitHub code into a live website'
image: 
created: 2025-08-02
updated: 2025-08-02
tags: 
- 'webdev'
- 'Svelte'
- 'GitHub'

---

My first experience building and deploying a website from GitHub…

A while ago, I stumbled across someone in my network who had a really cool website. Upon finding out that the blog template is on GitHub, I was immediately intrigued. 

Up until now, my experience with website building had been through platforms like WordPress, Wix, and Squarespace. While in many cases I had to peek under the hood, poking at the backend and writing bits of code to customise things, I knew I had it easy because these building tools already were doing the heavy lifting for me.

So I was up for a challenge. This time, I wanted to take my web building to the next level. I wanted to build my personal website then, so it was perfect timing. 

Unsurprisingly, things weren’t easy from the get-go. It was my first for everything:

- understanding the GitHub → VSCode → Deployment pipeline
- finding out what on earth pnpm and npm are
- realising why **Vite** and **Node** versions actually matter (spoiler: version incompatibility would later become my recurring nightmare)
- learning how to edit content in VSCode and seeing how pages full of code are magically turned into beautifully rendered webpages
- writing in Markdown
- deploying the website through a third-party app, then putting a domain on it
- … and many more

### The painful but valuable lessons

I ran into problems that I had to passionately troubleshoot. For example, I lost my content three times in a row because I kept putting files into the `/static` directory. Each time I ran `pnpm dev`, poof – gone. I eventually learned that `/static` was on the `.gitignore` list thanks to the way Urara works. So I shouldn’t have placed anything under that folder in the first place. 

But every mistake was a lesson. Now, occasionally when I update my website, I still run into new little problems (so if suddenly you can’t access my website, you know why…). Do I still panic? Yes of course. But then I roll up my sleeves and start debugging, reminding myself that in coding, nothing is random – and if I’m patient enough, I’ll eventually find my way to the solution.

### If you’re curious

Here is the blog template: [Urara] (https://github.com/importantimport/urara)

I also tinkered with [Extensions] (https://urara-docs.netlify.app/advanced/extension.html) (Note: some of the links here are broken – I recommend going to these devs’ GitHub to retrieve the codes)


