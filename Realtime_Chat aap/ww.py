# num=[[1,2,3],[5,6,7],[4,3,2,2,2]]
# i=0
# while i<len(num):
#     j=0
#     k=num[i][0]
#     while j<len(num[i]):
#         if num[i][j]>k:
#             k=num[i][j]
            
#         j=j+1
#     i=i+1
#     print(k)

# i=0
# while i<len(num):
#     j=0
#     k=num[i][0]
#     # print(k)
#     c=0
#     while j<len(num[i]):
#         print(num[i][j])
#         # if num[i][j]<k:
#         c=c+i
#         j=j+1
#     i=i+1
#     print(c)

a=[[1,2,3],[4,5,6],[10,11,12],[7,8,9]]
i=0
b=a[0]
# c=0/
while i<len(a):
    if a[i]>b:
        b=(a)[i]
        # c=c+b
    i=i+1
print(b)

