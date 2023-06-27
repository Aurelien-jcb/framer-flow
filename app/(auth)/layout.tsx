interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
      <main className="flex h-[100vh] flex-col items-center justify-center">{children}</main>
  )
}
