module Jekyll
	module AssetFilter
		def format_content(input)
			output = input

			if input.include? '<!-- excerpt end -->'
				output = input.split("<!-- excerpt end -->").at(0).split("<!-- excerpt start -->").at(1)
				@context.registers[:site].posts.each do |post|
					if(post.content == input)
						output += "<p><a href='#{post.url}'>read more &raquo;</a></p>"
						break
					end
				end
			end

			return output
		end
		
		def more_link(input)

		end
	end
end

Liquid::Template.register_filter(Jekyll::AssetFilter)
