# a=[1,2,3]
# b=["a","b","c"]
# c=[9,8,10]
# l={}
# k={}
# p=[]
# for i in range(len(b)):
#     l.update({b[i]:c[i]})
#     # k.update({a[i]:l})
#     # p.append(k)
    
# print(l)

# numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
# #// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
# max=0
# second_max=0
# for i in range(len(numbers)):
#    if (numbers[i]>max):
#            max=numbers[i]


# print(max)
# second_max=0
# for i in range (len(numbers)):
#     if numbers[i]>second_max and second_max!=max:
       
#             second_max=numbers[i]
 
# print(second_max)
# list1=[10,12,13,10,12,11,12,13,15,15]
# newlist=[]
# i=0
# while i<len(list1):
#     j=0
#     count=0
#     while j<len(list1):
#         if list1[i]==list1[j]:
#             count=count+1
#             h=list1[i]
#         j=j+1
#     i=i+1
#     if count>2 or count<2:
#         if h not in newlist:
#             newlist.append(h)
# print(newlis



my_file =open("my_file.txt","w")
k=my_file.write("shimla\ndelhi\npune")
# count=0
# a=0
# print(k)
with open("my_file.txt","r")as p:
    count=0
    for i in p:
        print(i)
        # count=count+1
print(count)
# i=0
# b=[]
# # while i<len(a):
#     # b.append(i)
# print(my_file)
# count=count+my_file
# print(count)
# my_file.close()
