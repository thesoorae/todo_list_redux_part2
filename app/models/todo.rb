class Todo < ApplicationRecord
  validates :title, :body, presence:true
  validates :done, inclusion: { in: [true, false]}
  
  has_many :steps
  has_many :taggings
  has_many :tags, through: :taggings
end
