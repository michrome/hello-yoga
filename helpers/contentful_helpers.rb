require "contentful"

module ContentfulHelpers
  def reviews
    contentful_data.reviews.sort_by {|_, review| review.date }.reverse
  end

  private

  def contentful_data
    # Returns a Hash of the content types synced by middleman contentful so:
    # contentful_data['content_type'] returns a Hash of entries of that content type
    # contentful_data['content_type'].first returns a two element Array
    # contentful_data['content_type'].first.first returns the ID of the entry
    # contentful_data['content_type'].first.last returns the entry as a Hash
    # contentful_data['content_type'].first.last.first is a two element Array
    # contentful_data['content_type'].first.last.first.first is the field name
    # contentful_data['content_type'].first.last.first.last is the field value
    data.send(ENV["CONTENTFUL_SPACE"]) # A Hash
  end
end
