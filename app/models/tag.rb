class Tag < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :taggings
  has_many :todos, through: :taggings

  def tag_names=(tag_names)
    self.tags = tag_names.map do |tag_name|
      Tag.find_or_create_by(name: tag_name)
    end
  end
end
