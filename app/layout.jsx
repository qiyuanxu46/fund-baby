import './globals.css';
import packageJson from '../package.json';

export const metadata = {
  title: `养基小宝 V${packageJson.version}`,
  description: '输入基金编号添加基金，实时显示估值与前10重仓'
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const saved = localStorage.getItem('theme');
                if (saved) {
                  document.documentElement.setAttribute('data-theme', saved);
                } else {
                  // Default to dark, but if you want system preference:
                  // if (window.matchMedia('(prefers-color-scheme: light)').matches) {
                  //   document.documentElement.setAttribute('data-theme', 'light');
                  // }
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
