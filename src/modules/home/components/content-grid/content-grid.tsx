const ContentGridItem = () => {
  return (
    <a href="#" className="block">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        className="h-64 w-full object-cover sm:h-80 lg:h-96"
      />

      <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
        Lorem, ipsum dolor.
      </h3>

      <p className="mt-2 max-w-sm text-gray-700">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
        reiciendis sequi ipsam incidunt.
      </p>
    </a>
  )
}

const ContentGrid = () => {
  return (
    <section className="">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Headline</h2>

          <p className="mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
            fugit consequuntur saepe laborum.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <ContentGridItem />
          <ContentGridItem />
          <ContentGridItem />
          <ContentGridItem />
        </div>
      </div>
    </section>
  )
}

export default ContentGrid
