import React from "react";

const BlogCard = ({ img }) => {
  return (
    <div className="h-[330px] w-[500px] flex flex-col justify-between p-8 gap-x-6 border-[3px] border-[#EDEDED] bg-[#EDEDED] px-8 py-8 rounded-[30px]">
      {/* Image section */}
      <div className="flex items-center gap-x-6">
        <div className="w-[80px] h-[80px] overflow-hidden shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] rounded-full flex">
          <img
            src={img}
            className="w-[80px] h-[80px] object-cover"
            alt="not found"
          />
        </div>
        <div className="text-black font-righteous font-[400]">Name</div>
      </div>

      {/* Detail Section */}
      <div className="w-full text-sm text-black px-3">
        “Lorem ipsum dolor sit amet consectetur. Arcu maecenas tristique amet
        gravida sed. Quisque euismod et egestas turpis odio mollis sapien. Nibh
        vestibulum lectus aliquam risus dui risus et orci. Velit tempor enim
        convallis pellentesque morbi mi sem enim. Hendrerit ornare egestas
        ornare in aliquam faucibus ut sit. Odio egestas var nunc aliquam pretium
        lacinia eget aliquam sed. Sit egestas amet.” donec purus varius quis
        magna.
      </div>
    </div>
  );
};

export default BlogCard;
