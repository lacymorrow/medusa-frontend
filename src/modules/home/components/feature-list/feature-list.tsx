const FeatureListItem = () => {
  return (
    <div className="flex items-start gap-4">
      <img
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="w-20 h-20 rounded-lg object-cover"
      />

      <div>
        <h3 className="text-lg/tight font-medium text-gray-900">
          Title goes here
        </h3>

        <p className="mt-0.5 text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          voluptas distinctio nesciunt quas non animi.
        </p>
      </div>
    </div>
  )
}

const FeatureList = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-8">
            <FeatureListItem />
            <FeatureListItem />
            <FeatureListItem />
            <FeatureListItem />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureList
