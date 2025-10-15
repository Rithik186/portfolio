"use client"

export function SkillsIcons() {
  // arrays of external images from pasted-text files
  const progIcons = ["https://skillicons.dev/icons?i=python,java,c,dart,javascript"]
  const progBadges = [
    "https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white&style=for-the-badge",
    "https://img.shields.io/badge/Java-007396?logo=java&logoColor=white&style=for-the-badge",
    "https://img.shields.io/badge/C-00599C?logo=c&logoColor=white&style=for-the-badge",
    "https://img.shields.io/badge/Dart-0175C2?logo=dart&logoColor=white&style=for-the-badge",
    "https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge",
  ]

  const webIcons = ["https://skillicons.dev/icons?i=flutter,react,html,css,tailwind,nodejs,express"]
  const webBadges = [
    "https://img.shields.io/badge/Flutter-02569B?logo=flutter&logoColor=white&style=for-the-badge",
    "https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB&style=for-the-badge",
    "https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white&style=for-the-badge",
    "https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white&style=for-the-badge",
    "https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white&style=for-the-badge",
    "https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white&style=for-the-badge",
    "https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white&style=for-the-badge",
  ]

  const toolIcons = ["https://skillicons.dev/icons?i=vscode,androidstudio,github,git,arduino,firebase"]
  const toolBadges = [
    "https://img.shields.io/badge/VS_Code-007ACC?logo=visual-studio-code&logoColor=white&style=for-the-badge",
    "https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white&style=for-the-badge",
    "https://img.shields.io/badge/Android_Studio-3DDC84?logo=android-studio&logoColor=white&style=for-the-badge",
    "https://img.shields.io/badge/Arduino_IDE-00979D?logo=arduino&logoColor=white&style=for-the-badge",
    "https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black&style=for-the-badge",
  ]

  const Row = ({ images, alt }: { images: string[]; alt: string }) => (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {images.map((src) => (
        <img
          key={src}
          src={src || "/placeholder.svg"}
          alt={alt}
          className="h-8 w-auto rounded-md bg-card/40 p-1 shadow-sm transition-transform hover:scale-[1.03]"
          loading="lazy"
        />
      ))}
    </div>
  )

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h4 className="text-sm font-medium tracking-wide uppercase text-muted-foreground">Programming Languages</h4>
        <Row images={progIcons} alt="Programming language icons" />
        <Row images={progBadges} alt="Programming language badges" />
      </div>
      <div className="space-y-3">
        <h4 className="text-sm font-medium tracking-wide uppercase text-muted-foreground">Web & Mobile</h4>
        <Row images={webIcons} alt="Web and mobile icons" />
        <Row images={webBadges} alt="Web and mobile badges" />
      </div>
      <div className="space-y-3">
        <h4 className="text-sm font-medium tracking-wide uppercase text-muted-foreground">Tools & Platforms</h4>
        <Row images={toolIcons} alt="Tools and platform icons" />
        <Row images={toolBadges} alt="Tools and platform badges" />
      </div>
    </div>
  )
}
