interface ProductCardProps {
  product: any;
}

export default function ProductCard({ product }: ProductCardProps) {
  const whatsappText = encodeURIComponent(
    `Hola D'Cabra 🐐 Deseo comprar ${product.title}`
  );

  const descripcion = product.content
    ?.replace(/<[^>]*>/g, "")
    ?.trim();

  const imageUrl = product.featuredImage?.node?.sourceUrl;

  return (
    <div
      className="
        h-full overflow-hidden rounded-[24px] border border-[#E8DFF3] bg-white flex flex-col 
        transition-all duration-300 ease-in-out
        hover:-translate-y-1 hover:border-primary/30
      "
    >
      <div className="h-[210px] bg-[#F4F1FD] flex items-center justify-center p-4">
        <a
          href={`/productos/${product.slug}`}
          className="w-full h-full flex items-center justify-center"
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={product.title}
              className="h-[170px] w-full object-contain transition-transform duration-500 hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-sm text-gray-400">
              Sin imagen
            </div>
          )}
        </a>
      </div>

      <div className="p-5 flex flex-col flex-1 gap-2">
        <h3 className="!font-sans !font-extrabold text-[0.82rem] text-[#1c1a14] leading-[1.3] uppercase tracking-[0.02em] m-0 line-clamp-2">
          {product.title}
        </h3>

        <p className="text-[0.76rem] text-[#6b7280] leading-normal flex-1 line-clamp-2">
          {descripcion}
        </p>

        <span className="font-sans font-extrabold text-[1.05rem] text-[#632d90]">
          S/{product.atributosDeLosProductos?.precio}.00
        </span>

        <a
          href={`https://wa.me/51900154196?text=${whatsappText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            h-11
            rounded-xl
            bg-primary
            text-white
            font-bold
            flex
            items-center
            justify-center
            gap-2
            w-full
            transition-all
            duration-300
            hover:bg-primary/90
            active:scale-[0.98]
            shadow-sm
          "
        >
          <svg
            className="w-5 h-5 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.707 1.458h.007c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Pedir por WhatsApp
        </a>
      </div>
    </div>
  );
}