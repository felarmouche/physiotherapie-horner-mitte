// app/about/page.tsx

export const metadata = {
    title: 'Über uns - Physio Reitenbach',
  }
  
  export default function AboutPage() {
    return (
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-4">Über uns</h1>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Nulla euismod, nisl eget congue malesuada, metus leo dapibus felis, 
          sit amet sollicitudin est lacus eu purus.
        </p>
        <p>
          Unsere Praxis zeichnet sich durch langjährige Erfahrung, 
          moderne Methoden und ein eingespieltes Team aus.
        </p>
      </div>
    )
  }
  